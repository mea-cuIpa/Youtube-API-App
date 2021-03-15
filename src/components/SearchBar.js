import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import svg from '../icons/sprite.svg';

class SearchBar extends React.Component {
  state = { input: '', error: '' };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.error) this.props.onFormSubmit(this.state.input);
  };

  handleChange = e => {
    let error = this.state.error;

    if (e.target.value) {
      error =
        e.target.value.length > 20 ? 'Input is longer than 20 characters.' : '';
    }

    this.setState({ input: e.target.value, error });
  };

  render() {
    const { error, input } = this.state;
    return (
      <div className="w-75">
        <Form onSubmit={this.handleSubmit} className="d-flex w-100 my-3">
          <Form.Control
            className="rounded-0 header__input"
            placeholder="Search for a videos..."
            type="text"
            value={input}
            onChange={this.handleChange}
            noValidate
          ></Form.Control>
          <Button variant="dark" className="rounded-0" type="submit">
            <svg className="header__icon">
              <use xlinkHref={`${svg}#icon-magnifying-glass`} />
            </svg>
          </Button>
        </Form>
        {error && (
          <Alert variant="danger" className="h5">
            {error}
          </Alert>
        )}
      </div>
    );
  }
}

export default SearchBar;
