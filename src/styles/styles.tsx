import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  color: white;
  background-color: #ffffff;
`;
export const NavBar = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: teal;
`;
export const Title = styled.h1`
  margin: 0;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 3.5rem;
  color: teal;
`;
export const Equal = styled.span`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 4rem;
  margin-top: 4rem;
  color: black;
`;
export const ListNavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none
  font-weight: 600;
  line-height: 1.18;
  margin-bottom: 1em;
  color:#ffffff;
`;
export const Links = styled.li`
  margin-right: 1em;
`;
export const TextLink = styled.span`
  font-weight: 700;
  line-height: 1.18;
  font-size: 1.3rem;
  color: #ffffff;
`;
export const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
export const Select = styled.select`
  display: block;
  margin-left: 0.5em;
  max-width: 4.5em;
`;
export const InputAmount = styled.input`
  max-width: 10rem;
  padding: 0.025em 0.5em;
`;
export const ConvertorBox = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  text-align: center;
`;
