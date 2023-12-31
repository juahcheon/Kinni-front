import styled from '@emotion/styled';

export const Header = styled.header`
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 48px;
    color: rgb(40, 84, 48);
    line-height: 46px;
    letter-spacing: -0.75px;
    margin-top: 90px;
    margin-bottom: 50px;
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 400px;
    max-width: 400px;
`;

export const Label = styled.label`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
    display: block;
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
    }
`;

export const Input = styled.input`
    --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
    border: 1px solid #fff;
    border-bottom: 1px solid rgb(95, 141, 78);
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 10px;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    padding: 12px;
    height: 44px;
    padding-top: 11px;
    padding-bottom: 13px;
    font-size: 18px;
    line-height: 1.33333333;
    outline: none;
    // &:focus {
    // --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    // box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    // }
`;

export const Button = styled.button`
    margin-top: 50px;
    margin-bottom: 12px;
    width: 100%;
    max-width: 100%;
    color: #fff;
    background-color: rgb(157, 192, 139);
    border: none;
    font-size: 18px;
    font-weight: 900;
    height: 44px;
    min-width: 96px;
    padding: 0 16px 3px;
    transition: all 80ms linear;
    user-select: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    &:hover {
    // background-color: rgba(74, 21, 75, 0.9);
    border: none;
    }
    &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    }
`;

export const Error = styled.div`
    color: #e01e5a;
    margin: 8px 0 16px;
    font-weight: bold;
`;

export const Success = styled.div`
    color: #2eb67d;
    font-weight: bold;
`;

export const LinkContainer = styled.p`
    font-size: 13px;
    color: #616061;
    margin: 0 auto 8px;
    width: 400px;
    max-width: 400px;
    & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
        text-decoration: underline;
    }
}
`;
