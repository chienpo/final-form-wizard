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

export const StepButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    border: 1px solid;

    ${({ active }) => active && `
        color: white;
        background: black;
        border-color: black;
    `};

    ${({ completed }) => completed && `
        color: white;
        background: black;
    `};

    ${({ nextAvailable }) => nextAvailable && `
      background: rgb(240, 240, 240);
      color: black;
      border-color: rgb(150, 150, 150);
    `}

    ${({ completed }) => completed && `
        color: white;
        font-size: 20px;
        background: black;
        border: 1px solid black;
    `};

    &:disabled {
        cursor: not-allowed;
    };
`;

export const StepLabel = styled.div`
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