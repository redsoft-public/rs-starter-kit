import Inputmask from 'inputmask';

export default function initInputMask() {
    const masks = {
        tel: '+7 (999) 999-99-99',
        date: '99.99.9999',
        card: ['9{4} 9{4} 9{4} 9{4}', { placeholder: '∗' }],
    };

    Object.keys(masks)
        .forEach((maskName) => {
            const maskPlaceholder = masks[maskName];

            if (typeof maskPlaceholder === 'object') {
                Inputmask(...maskPlaceholder)
                    .mask(`input.js-mask-${maskName}`);
            } else {
                Inputmask(maskPlaceholder)
                    .mask(`input.js-mask-${maskName}`);
            }
        });
}
