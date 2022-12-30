({
    // code in the helper is reusable by both
    // the controller.js and helper.js files
    handleSearch: function( component, searchTerm ) {
        
        var flag = $A.get("e.c:flagEvt");
        flag.fire();
        console.log('Second round');
        
        var action = component.get( "c.searchAccounts" );
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback( this, function( response ) {
            var event = $A.get( "e.c:AccountsLoaded" );
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
            console.log('Fire');
            
        });
        $A.enqueueAction( action );
        
    }
})