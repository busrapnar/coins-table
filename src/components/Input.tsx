import { ChangeEventHandler } from "react";

export type InputProps = {
value: string;
onChange: ChangeEventHandler<HTMLInputElement>;
className?: string;
placeholder?: string;
};

function Input(props: InputProps) {
    return (
        <input
            type="text"
            className={"border border-white bg-blue-950  p-2 " + props.className}
            placeholder={props.placeholder || ''}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input