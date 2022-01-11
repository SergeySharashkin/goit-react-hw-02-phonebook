import styled from "@emotion/styled";
const Item = styled.li`
  margin: 10px 0;
`;
const Name = styled.p``;
const Number = styled.span``;
const RemoveButton = styled.button`
  padding: 0;
  margin-left: 20px;
  background-color: green;
  &:hover {
    background-color: red;
  }
`;
export { Item, Name, Number, RemoveButton };
