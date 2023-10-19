import PropTypes from 'prop-types';

import './style.scss';

export const FIELD_TYPES = {
  INPUT_TEXT: "text",
  TEXTAREA: "textarea"
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = <input required type="text" name={name} placeholder={placeholder} data-testid="field-testid" />;
      break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea required type="textarea" name={name} placeholder={placeholder} data-testid="field-testid" />;
      break;
    default:
      component = <input required type="text" name={name} placeholder={placeholder} data-testid="field-testid" />;
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
Field.defaultProps = {
  label: '',
  placeholder: '',
  type: FIELD_TYPES.INPUT_TEXT,
  name: 'field-name'
};

export default Field;
