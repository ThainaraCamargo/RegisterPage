import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color: rgba(84,38,183,1);
    border: 1px solid rgba(255,255,255,0.7);
    width: 100%;
    height: 2rem;
    color: white;
    border-radius: 1rem;
    font-size: .8rem;
    font-weight: bold;
    transition: all .5s ease-in-out;

    :hover {
        background-color: white;
        color: black;
    }
`;