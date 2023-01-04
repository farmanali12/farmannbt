import styled from "styled-components";
export const Form = styled.form.attrs((props) => ({ onSubmit: props.onSubmit }))`
    padding: 40px 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const FormGroup = styled.div`
    width: 350px;
    padding-bottom: 20px;
    position: relative;
    label{
        font-size: 18px;
        text-transform: capitalize;
        color: #145DA0;
    }
`
export const Eye = styled.div`
    position: absolute;
    right: 1px;
    top:30%;
    border-radius: 6px;
    width: 42px;
    height: 42px;
    padding: 10px;
    background: #fff;
`

export const Button = styled.button.attrs(({ onClick, type }) => ({
    onClick,
    type: type,
}))`
    width: 100%;
    height: 100%;
    background: ${({ bg }) => bg};
    outline: none;
    border: none;
    cursor: pointer;
`
export const Submit = styled.button.attrs(({ onClick, type }) => ({
    onClick,
    type: type,
}))`
    width: 100%;
    height: 45px;
    background: #145DA0;
    outline: none;
    font-size: 20px;
    color: #fff;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    &:active{
        background: #145da0cf;
    }
`
export const Image = styled.img.attrs(({ src, alt }) => ({ src, alt }))`
    width: 100%;
    height: 100%;
`
export const Input = styled.input.attrs(({ onChange, value, name, placeholder, type, id, }) => ({
    onChange: onChange,
    value: value,
    name: name,
    placeholder: placeholder,
    type: type,
    id: id,
}))`
    width: 100%;
    height: 45px;
    padding: 0px 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #0C2D48;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    outline: 4px solid transparent;
    transition: all 0.02s linear;
    display: block;
    margin-top: 5px;
    &:focus{
        transition: all 0.2s linear;
        border: 1px solid #145DA0;
        outline: 4px solid #B1D4E0;
    }
`
