export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    className?: string;
    value?: string;
    variant?: InputVariant;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    name?: string;
};

export type InputVariant = 'normal' | 'left';