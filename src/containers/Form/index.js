import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Button, { BUTTON_TYPES } from '../../components/Button';
import Field, { FIELD_TYPES } from '../../components/Field';
import Select from '../../components/Select';

const mockContactApi = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);

      try {
        await mockContactApi();
        setSending(false);
        onSuccess(); // ajout de onSucces pour ouvrir la modal
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="Nom" label="Nom" required />
          <Field placeholder="Prénom" label="Prénom" required />
          <Select selection={['Personel', 'Entreprise']} onChange={() => null} label="Personel / Entreprise" type="large" titleEmpty />
          <Field placeholder="Email" label="Email" required />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? 'En cours' : 'Envoyer'}
          </Button>
        </div>
        <div className="col">
          <Field placeholder="Message" label="Message" type={FIELD_TYPES.TEXTAREA} required />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null
};

export default Form;
