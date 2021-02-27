import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import svg from '../icons/sprite.svg';

class SearchBar extends React.Component {
  state = { input: '' };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.input.length < 20) this.props.onFormSubmit(this.state.input);
  };

  render() {
    return (
      <div className="w-75">
        <Form onSubmit={this.onFormSubmit} className="d-flex w-100 my-3">
          <Form.Control
            className="rounded-0 header__input"
            placeholder="Search for a videos..."
            type="text"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          ></Form.Control>
          <Button variant="dark" className="rounded-0" type="submit">
            <svg className="header__icon">
              <use xlinkHref={`${svg}#icon-magnifying-glass`} />
            </svg>
          </Button>
        </Form>
        {this.state.input.length > 20 && (
          <Alert variant="danger" className="h5">
            Input is longer than 20 characters.
          </Alert>
        )}
      </div>
    );
  }
}

export default SearchBar;
