document.addEventListener('DOMContentLoaded', () => {
    const flexboxContainer = document.querySelector('.flexbox-container');
    const resetBtn = document.getElementById('resetBtn');
    const gapInput = document.getElementById('gap');

    const flexRowBtn = document.getElementById('flexRow');
    const flexColumnBtn = document.getElementById('flexColumn');

    const justifyStartBtn = document.getElementById('justifyStart');
    const justifyCenterBtn = document.getElementById('justifyCenter');
    const justifyEndBtn = document.getElementById('justifyEnd');
    const justifySpaceBetweenBtn = document.getElementById('justifySpaceBetween');
    const justifySpaceAroundBtn = document.getElementById('justifySpaceAround');
    const justifySpaceEvenlyBtn = document.getElementById('justifySpaceEvenly');

    const alignStartBtn = document.getElementById('alignStart');
    const alignCenterBtn = document.getElementById('alignCenter');
    const alignEndBtn = document.getElementById('alignEnd');

    const flexGrowResetBtn = document.getElementById('flexGrowReset');
    const flexGrowAllBtn = document.getElementById('flexGrowAll');
    const box1GrowInput = document.getElementById('box1Grow');
    const box2GrowInput = document.getElementById('box2Grow');
    const box3GrowInput = document.getElementById('box3Grow');

    function resetFlexbox() {
        flexboxContainer.style.flexDirection = 'row';
        flexboxContainer.style.justifyContent = 'flex-start';
        flexboxContainer.style.alignItems = 'stretch';
        flexboxContainer.style.gap = '0px';

        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;

        document.getElementById('box1').style.flexGrow = 0;
        document.getElementById('box2').style.flexGrow = 0;
        document.getElementById('box3').style.flexGrow = 0;
    }

    resetBtn.addEventListener('click', resetFlexbox);

    gapInput.addEventListener('input', (e) => {
        flexboxContainer.style.gap = `${e.target.value}px`;
    });

    flexRowBtn.addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'row';
    });

    flexColumnBtn.addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'column';
    });

    justifyStartBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-start';
    });

    justifyCenterBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'center';
    });

    justifyEndBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-end';
    });

    justifySpaceBetweenBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-between';
    });

    justifySpaceAroundBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-around';
    });

    justifySpaceEvenlyBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-evenly';
    });

    alignStartBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-start';
    });

    alignCenterBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'center';
    });

    alignEndBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-end';
    });

    flexGrowResetBtn.addEventListener('click', () => {
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;

        document.getElementById('box1').style.flexGrow = 0;
        document.getElementById('box2').style.flexGrow = 0;
        document.getElementById('box3').style.flexGrow = 0;
    });

    flexGrowAllBtn.addEventListener('click', () => {
        document.getElementById('box1').style.flexGrow = 1;
        document.getElementById('box2').style.flexGrow = 1;
        document.getElementById('box3').style.flexGrow = 1;
    });

    [box1GrowInput, box2GrowInput, box3GrowInput].forEach((input, index) => {
        input.addEventListener('input', (e) => {
            document.getElementById(`box${index + 1}`).style.flexGrow = e.target.value;
        });
    });
});

