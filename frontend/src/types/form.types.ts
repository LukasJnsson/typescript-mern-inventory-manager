

interface ICustomFormProps {
    label: string;
};


export interface ICustomInputProps extends ICustomFormProps {
    placeholder: string;
};


export interface ISelectOption {
    id: string;
    name: string;
};
export interface ICustomSelectProps extends ICustomFormProps {
    options: ISelectOption[];
};


export interface ICustomSubmitProps extends ICustomFormProps {

};