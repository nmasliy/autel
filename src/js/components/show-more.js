const $triggers = document.querySelectorAll('.partners__btn-more');

if ($triggers.length > 0) {
  const moreText = $triggers[0].dataset.more;
  const lessText = $triggers[0].dataset.less;

  $triggers.forEach(($trigger) => {
    $trigger.addEventListener('click', function () {
      const $box = $trigger.closest('.partners__tabs-item');
      if ($box.classList.contains('is-more')) {
        $box.classList.remove('is-more');
        $trigger.textContent = moreText;
      } else {
        $box.classList.add('is-more');
        $trigger.textContent = lessText;
      }
    });
  });
}
