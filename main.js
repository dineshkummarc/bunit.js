require(
    {
        paths: {
            assert: 'src/assert',
            bunit: 'src/bunit'
        }
    },
    ['bunit', 'tests/tests'],
    function(bunit, tests) {
        require.ready(function() {
            var r = bunit.runner();

            r.defaultUI();
            r.run();
        });
    }
);
