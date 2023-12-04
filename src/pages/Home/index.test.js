import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from './index';

describe('When Form is created', () => {
  it('a list of fields card is displayed', async () => {
    render(<Home />);
    await screen.findByText('Email');
    await screen.findByText('Nom');
    await screen.findByText('Prénom');
    await screen.findByText('Personel / Entreprise');
  });

  describe('and a click is triggered on the submit button', () => {
    it('the success message is displayed', async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText('Envoyer'),
        new MouseEvent('click', {
          cancelable: true,
          bubbles: true
        })
      );
      await screen.findByText('En cours');
      await screen.findByText('Message envoyé !', {}, { timeout: 5000 });
    });
  });
});

describe('When a page is created', ()  => {
  it('a list of events is displayed', async () => {
    // to implement
    // After Home rendering, verify if the const defined is online 
    render(<Home />);
    const eventList = screen.getByTestId('events-testid');
    expect(eventList).toBeInTheDocument();
  });

  it('a list a people is displayed', async () => {
    // to implement
    // After Home rendering, verify if the const defined is online
    render(<Home />);
    const peopleCard = screen.getByTestId('People-Card-testid');
    expect(peopleCard).toBeInTheDocument();
  });

  it('a footer is displayed', () => {
    // to implement
    // After Home rendering, verify if the const defined is online
    render(<Home />);
    const footer = screen.getByTestId('Footer-testid');
    expect(footer).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed",   () => {
    // to implement
    render(<Home />);

    // element is initially not present... need an asynchronous method
    // wait for appearance inside an assertion

    waitFor(() => {
      const cardDisplayed = screen.getByTestId('card-testid');
      expect(cardDisplayed).toBeInTheDocument();
    });
  })
})
