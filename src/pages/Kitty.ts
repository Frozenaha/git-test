export interface FoorProps(Value){
  value:Value;
  onChange:(value:Value)=>void;
}


export function Foo<Value extends React.key>(props:FooProps<value)