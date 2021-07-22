function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) return true;
    else return false;
  }

  let formatPhoneNumber = (event) => {
    const str = event.target.value

    const cleaned = ('' + str).replace(/\D/g, '')

    const match1 = cleaned.match(/^(\d{2})$/)
    const match2 = cleaned.match(/^(\d{2})(\d{2})$/)
    const match3 = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)

    if (event.nativeEvent.inputType === 'deleteContentBackward') return event.target.value

    if (match1)
      return ['+', match1[1], ' '].join('')
    if (match2)
      return ['+', match2[1], ' (', match2[2], ') '].join('')
    if (match3)
      return ['+', match3[1], ' (', match3[2], ') ', match3[3], '-', match3[4]].join('')
  }
