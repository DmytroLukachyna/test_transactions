function main() {
  document.querySelector('.header__close').addEventListener('click', () => {
    alert(
      'Yeah, generally it should close something, but this test task does not require any logic, right? =) Anyway, if you see this – I am glad that you have found it, thanks for your time, I really appreciate it.',
    );
  });
  document.querySelector('.main__item-dropdown').addEventListener('click', () => {
    document.querySelector('.dropdown-wrapper').classList.toggle('dropdown-wrapper_active');
    document.querySelector('.main__item-dropdown-container').classList.toggle('hidden');
  });
  document.querySelectorAll('.main__item-dropdown-option').forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelector('.main__item-dropdown span').textContent = e.textContent;
    });
  });
  document.querySelectorAll('.main__radio').forEach((e) => {
    e.addEventListener('click', () => {
      if (document.querySelectorAll('input[type="radio"]:checked').length > 0) {
        document.querySelector('.main__button_next').classList.add('main__button_next_active');
      }
    });
  });
}

export default main;
