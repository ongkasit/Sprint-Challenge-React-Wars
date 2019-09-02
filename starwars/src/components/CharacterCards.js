import React, {useState , useEffect} from "react";
import { Card, Button, CardText } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    margin: 25px;
    width: 50%;
    align-self: center;
`
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
`

export default function CharacterCard() {
    const [ characters, setCharacters ] = useState([{}]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                const charArr = res.data.results;
                setCharacters(charArr);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {characters.map(character => {
                return <StyledContainer> 
                    <Card body>
                        <Button color="danger">{character.name}</Button>
                        <CardText>
                            Weight: {character.mass}kg
                        </CardText>
                        <CardText>
                            Height: {character.height}m
                        </CardText>
                        <CardText>
                            Eye Color: {character.eye_color}
                        </CardText>
                        <CardText>
                            Skin Color: {character.skin_color}
                        </CardText>
                    </Card>
                </StyledContainer>
            })}
        </div>
    )
}
