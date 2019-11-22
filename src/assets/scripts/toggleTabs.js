export default function toggleTabs() {
    const tabs = '.js-tabs';

    $(tabs)
        .each(function tabInitHandler() {
            $(this)
                .find('[data-choose]')
                .each(function hideTabHandler(index) {
                    if (index !== 0) {
                        $(this)
                            .hide();
                    }
                });

            $(this)
                .find('[data-target]')
                .each(function toggleTabHandler(index) {
                    if (index !== 0) {
                        $(this)
                            .removeClass('active');
                    } else {
                        $(this)
                            .addClass('active');
                    }
                });
        });

    $('[data-target]')
        .click(function tabTargetClickHandler() {
            const dataTarget = $(this)
                .data('target');

            $(this)
                .parents(tabs)
                .find('[data-target]')
                .not(this)
                .removeClass('active');
            $(this)
                .addClass('active');

            $(this)
                .parents(tabs)
                .find('[data-choose]')
                .each(function toggleTabHandler() {
                    const dataChoose = $(this)
                        .data('choose');
                    if (dataChoose === dataTarget) {
                        $(this)
                            .show();
                    } else {
                        $(this)
                            .hide();
                    }
                });
        });
}
