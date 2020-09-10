import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // renders
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('contact form h1 has text "Contact me"', () => {
    it('has text "Contact me"', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    })
});

describe('contact form sumbit button has text content', () => {
    it('has text "Submit"', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
});