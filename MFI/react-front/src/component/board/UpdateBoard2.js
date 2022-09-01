import { Button } from '@mui/material';
import Editor from '../EditorComponent';

const UpdateBoard2 = () => {
    // const [desc, setDesc] = useState({
    //     title:'',
    //     content:''
    // });
    // function onEditorChange(value) {
    //     setDesc(value)
    // }
    
    return (
        <div>
            <div>
                <input type={text} name="title" />
            </div>
            <div>
                <Editor value={desc} name="content" />
                <Button
                variant="contained"
                sx={{
                backgroundColor:'rgb(180,184,243)'
                }}
                >수정</Button>
            </div>
            <div>
            </div>

        </div>
    )
};

export default UpdateBoard2;