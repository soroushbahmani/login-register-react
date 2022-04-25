import { toast } from 'react-toastify';

export const notify = (text,type) => {
    if(type === "SUCCESS"){
        toast.success(text,{
            theme: "colored"
        });
    }else{
        toast.error(text,{
            theme: "colored"
        });
    }
}