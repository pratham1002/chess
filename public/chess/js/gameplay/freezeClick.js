function freezeClick(e) {
        if (freezeClic) {
            e.stopPropagation();
            e.preventDefault();
        }
    }