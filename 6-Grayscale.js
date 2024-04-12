javascript:(
    () => {
        let blurTimer;
        function startBlurTimer() {
            blurTimer = setTimeout(() =>  document.body.style.filter = 'grayscale(100%)', 3000);
        }

        document.addEventListener('mousemove', () => {
            clearTimeout(blurTimer);
            document.body.style.filter = 'none';
            startBlurTimer();
        });
        startBlurTimer();
  }
  )();