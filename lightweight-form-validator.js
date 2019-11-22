class FormValidator {
  constructor (formId, validators) {
      this.form = document.forms[formId];
      this.validators = validators;
      this.initEvents();
  }
  initEvents () {
      //This is needed to reset the custom messages
      for(const element of this.form.elements) {
          element.addEventListener('change', evt => evt.target.setCustomValidity(''));
      }
      //Submit event
      this.form.addEventListener('submit', evt => {
          if(this.validate() === false){
              this.form.reportValidity();
              evt.preventDefault();
          }
      })
  }
  validate () {
      for(const validator of this.validators){
          if(validator.condition(this.form.elements)){
              this.form.elements[validator.element].setCustomValidity(validator.message)
              return false;
          }
      }
      return true;
  }
}
