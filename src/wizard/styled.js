import styled from 'styled-components';

export const WizardForm = styled.form`
    width: 100%;
`;

export const InputGroup = styled.div`
    padding-bottom: 20px;
`;

export const BottomControlsRow = styled.div`
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    max-width: 400px;
    margin: 0 auto;
`;

export const Checkbox = styled.input`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    
    &:before {
        content: '${({ stepNumber, prevVisited, visited }) => prevVisited ? '\\2713' : `${visited ? '\\2713' : stepNumber}`}';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgb(200, 200, 200);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: black;
        border: 1px solid black;
        font-size: ${({ visited }) => visited ? '20px' : '10px'};
    }
    
    &:checked {
        &:before {
            content: '${({ stepNumber, prevVisited }) => prevVisited ? '\\2713' : stepNumber}';
            color: white;
            font-size: 20px;
            background: black;
            border: 1px solid black;
        }
    }
    
    ${({ prevVisited }) => prevVisited && `
        &:before {
            color: white;
            font-size: 20px;
            background: black;
            border: 1px solid black;
        }
    `}
    
    &:disabled {
        cursor: not-allowed;
        
        ${({ disabled }) => disabled && `
            &:before {
                background: white;
            }
        `};
    };
`;

export const CheckboxLabel = styled.div`
    text-align: center;
    padding-top: 10px;
`;

export const Navigation = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    grid-column-gap: 20px;
    padding-bottom:  20px;
`;