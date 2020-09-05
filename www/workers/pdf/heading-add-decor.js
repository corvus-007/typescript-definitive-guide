const visit = require('unist-util-visit');
const StringUtils = require('../../src/utils/string-utils');


module.exports = ({ toc }) => ast => {

    const toValue = node => node.children.reduce((result, { value }) => result.concat(value), ``);

    const isChapterHeading = node => node.type === `heading` && node.depth === 2;


    visit(ast, isChapterHeading, chapterHeadingNode => {
        let title = toValue(chapterHeadingNode);
        let tocItem = toc.find(item => item.title === title);

        if (!tocItem) {
            throw new Error(`Book toc item with title "${title}" not found in toc.`);
        }

        let chapterIndex = toc.indexOf(tocItem);

        chapterHeadingNode.children = [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        value: `Глава ${StringUtils.generateIndex(chapterIndex, 2)}`,
                    }
                ],
                data: {
                    hProperties: {
                        className: [`chapter-heading__chapter-index`]
                    }
                }
            },
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        value: `. `,
                    }
                ],
                data: {
                    hProperties: {
                        className: [`chapter-heading__dot`]
                    }
                }
            },
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        value: title
                    }
                ],
                data: {
                    hProperties: {
                        className: [`chapter-heading__chapter-title`]
                    }
                }
            }
        ];
    });


    return ast
}
