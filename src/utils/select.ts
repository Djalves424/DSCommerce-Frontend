export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "40px",
        border: "none",
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholder)",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-primary)",
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none",
    }),
};