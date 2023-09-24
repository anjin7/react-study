import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { styled } from 'styled-components';
import { fetchCharacters } from "../api";

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface ICharacter {
  id: number,
  name:string,
  imageUrl:string,
}
function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>("allChararcters", fetchCharacters);
  return (
    <div>
      <h1>Disney Charaters</h1>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ul>

      </ul>
      )}
      
    </div>
  );
}
export default Home;

function useQuery<T>(arg0: string, fetchCoins: any): { isLoading: any; data: any; } {
  throw new Error('Function not implemented.');
}
