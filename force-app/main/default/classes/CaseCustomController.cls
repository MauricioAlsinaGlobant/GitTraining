public class CaseCustomController {
    
    public Case aCase { get; set; }
    
    public CaseCustomController() {
       this.aCase = new Case();
    }
    
    public PageReference saveCase(){
        insert aCase;
        return null; 
    }
}