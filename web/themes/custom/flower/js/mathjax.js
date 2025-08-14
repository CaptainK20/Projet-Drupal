document.addEventListener("DOMContentLoaded", function () {
  if (window.MathJax && window.MathJax.typeset) {
    document.querySelectorAll(".math-box").forEach(function (box) {
      MathJax.typesetPromise([box]);
    });
  }
});
