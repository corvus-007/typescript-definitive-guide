import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppLocalization } from "../../localization";
import { default as cn } from "classnames";
import { getClassNameWithBgColorAttrBySectionName } from "../../maps/book-chapter-section-type-to-style-color-map";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { useBookTocPageStores } from "../../stores/mobx-entry__book_toc";


interface IBookTocTreeCloseDecorProps {
}

export const BookTocTreeCloseDecor: FC<IBookTocTreeCloseDecorProps> = observer( (  ) => {
  let [{ lang: locale }] = useTranslator<[AppLocalization]>();
  let { bookTocTreeStore } = useBookTocPageStores();

  let sectionName = (
    bookTocTreeStore.treeFiltered[ bookTocTreeStore.treeFiltered.length - 1] as TreeNode<BookTocNode>
  ).data.section;
  let classes = cn( `bt-tree_close-decor`, getClassNameWithBgColorAttrBySectionName( sectionName, locale ) );

  return (
    <div className={classes}></div>
  );
} );
