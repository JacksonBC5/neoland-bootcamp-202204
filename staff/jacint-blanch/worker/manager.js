
    function Manager(name, email, socialSecurityNumber, id, birthDate){
        this.name = name
        this.email = email
        this.socialSecurityNumber = socialSecurityNumber
        this.id = id
        this.birthDate = birthDate
        this.status = ''
    }
    
    Manager.prototype = Object.create(Developer.prototype)
    Manager.prototype.constructor = Manager

    Manager.prototype.work = function() {
        this.status = 'working'
    }
    
    Manager.prototype.break = function() {
        this.status = 'pause'
    }

    Manager.prototype.code = function() {
        this.status = 'coding'
    }


  
    
    