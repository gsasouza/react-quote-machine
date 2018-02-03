import React from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import NewIcon from './NewIcon';
import TwitterIcon from './TwitterIcon';

const Phrase = styled.div`
  font-family: 'Indie Flower', cursive !important;
  word-break: normal;
  font-size: 30px;
`;
const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;


const Author = styled.cite`
  margin-top: 30px;
  font-family: 'Indie Flower', cursive !important;
  font-size: 20px;
`;
export default class Quote extends React.Component {
  state = {
    quote: {}
  };
  componentDidMount = () => {
    this.fetchQuote();
  };

  fetchQuote = async () => {
    try {
      const headers = new Headers({
        'X-Mashape-Key': 'Pyg3wHGU9lmshvOgXIbe9ghiDcOep1gnIHwjsnKBmYjO7E8vus',
        Accept: 'application/json'
      });

      const response = await fetch(
        'https://andruxnet-random-famous-quotes.p.mashape.com/?count=1',
        {
          method: 'GET',
          headers
        }
      );
      const data = await response.json();
      this.setState({
        quote: {
          phrase: `" ${data.quote} "`,
          author: `- ${data.author}`
        }
      });
    } catch (e) {
      throw e;
    }
  };
  render() {
    return (
      <div>
        <Phrase>{this.state.quote.phrase} </Phrase>
        <Author>{this.state.quote.author}</Author>
        <ButtonWrapper>
          <StyledButton fab onClick={() => this.fetchQuote()}>
            <NewIcon />
          </StyledButton>          
          <TwitterIcon quote={this.state.quote}/>
        </ButtonWrapper>
      </div>
    );
  }
}
