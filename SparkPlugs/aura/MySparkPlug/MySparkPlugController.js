({
    doInit: function(cmp, event, helper) {
        $A.get('e.FDService:SparkPlugLoadedEvent')
            .fire({extensionPoint: cmp.get('v.extensionPoint')});

        console.log(cmp.get('v.data'));
    },
    handleClick: function(cmp, event, helper) {
        $A.get('e.FDService:SparkPlugCompleteEvent')
            .fire({extensionPoint: cmp.get('v.extensionPoint')});
    }
})