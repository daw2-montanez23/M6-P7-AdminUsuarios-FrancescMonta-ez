
export const adminUsuarios = {
    array: [
        {
            id: 1,
            nick: 'Franks',
            email: 'Franks@gmail.com',
            pass: 'prueba343'
        },
        {
            id: 2,
            nick: 'Pablo',
            email: 'Pablo@gmail.com',
            pass: 'pear349'
        }
    ],
    pintaTabla: ()=>{
        let html = `<table class="table table-striped" id="tabla">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nick</th>
                                <th>Email</th>
                               <th></th> 
                            </tr>
                        </thead>
                    </table>`            
        
     return html;
    },
    
}
