import React, { createContext, FC, ReactNode, useContext, useRef, useState } from "react";
import { generateStringId } from "../../utils/string-utils";

type StateActionParams = { id: string; checked?: boolean; };
type ChangeActionParams = { id: string; };

export const RadioGroupContext = createContext( {
  name: ``,

  setState: ( params:StateActionParams ) => {
  },
  getState: ( id: string ):boolean => false

} );
export const useRadioGroup = () => useContext( RadioGroupContext );
export type UseRadioGroup=ReturnType<typeof useRadioGroup>;


interface IRadioGroupProps {
  name?:string;
  children: ReactNode | ReactNode[];
}

type State = Record<string, boolean>;

export const RadioGroup: FC<IRadioGroupProps> = ( { name = generateStringId(), children } ) => {
  let [state, setState] = useState<State>( {} );
  let context: UseRadioGroup = {
    name,
    setState: ( { id, checked } ) =>
      setState( prevState => Object.keys( prevState ).reduce( ( nextState, key ) => ( {
        ...nextState,
        [ key ]: key === id ? checked ?? !prevState[ key ] : false
      } ), {} as State ) ),
    getState: id => state[ id ]
  };


  return (
    <RadioGroupContext.Provider value={ context }>
      { children }
    </RadioGroupContext.Provider>
  );
};