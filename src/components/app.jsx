import { useState } from "react";
import './app.css'
import FormBar from "./formbar/formbar";
import PreviewCV from "./previewcv/previewcv";

const initialData = {
    general: {
        children: []
    },
    education: {
        children: []
    },
    work: {
        children: []
    }
}

export default function App() {

    const [data, setData] = useState(initialData)
    const [key, setKey] = useState(0);

    function testData() {
        setData({
            general: {
                children: [{
                    firstName: 'Vadim',
                    lastName: 'Kostrov',
                    email: 'vadimkostrov319@gmail.com',
                    phone: '+971-50-172-3480',
                }]
            },
            education: {
                children: [{
                    school: 'University of Exeter',
                    subject: 'BSc. Business & Management',
                    grade: '2:1 Upper Second',
                    eduDetails: 'Brilliant course\nthat encomposses all the important details of Business Management\nYes, it\'s great',
                    eduFrom: 'September 2018',
                    eduTo: 'June 2021',
                    eduLocation: 'Exeter, United Kingdom'
                },
                {
                    school: 'Wellington Silicon Oasis',
                    subject: 'Multiple Subjects',
                    grade: '31 Points',
                    eduDetails: 'Shockingly boring, yet barely impactful to my life',
                    eduFrom: 'September 2016',
                    eduTo: 'June 2018',
                    eduLocation: 'Dubai, United Arab Emirates'
                }]
            },
            work: {
                children: [
                    {
                        company: 'Cordant Recruitment',
                        title: 'Amazon Sortation Associate',
                        workDetails: 'Horrendously boring work that required a lot of willpower and grit.',
                        workFrom: 'June 2020',
                        workTo: 'August 2020',
                        workLocation: 'Exeter, United Kingdom'
                    },
                    {
                        company: 'Thriving Ventures',
                        title: 'Media Developer',
                        workDetails: 'Developed & Created multiple art pieces for a community of thousands',
                        workFrom: 'September 2014',
                        workTo: 'September 2018',
                        workLocation: 'Dubai, United Arab Emirates'
                    }
                ]
            }
        })
    }

    function forceRender() {
        setKey(key + 1);
    }

    function getFormType(name) {
        const generalItems = ['firstName', 'lastName', 'email', 'phone'];
        const educationItems = ['school', 'grade', 'eduDetails', 'eduFrom', 'eduTo', 'eduLocation'];
        const workItems = ['company', 'workDetails', 'workFrom', 'workTo', 'workLocation'];

        if (generalItems.includes(name)) return 'general';
        if (educationItems.includes(name)) return 'education';
        if (workItems.includes(name)) return 'work';
    }

    function generalInputHandler(e) {
        const inputType = e.target.name;
        const formType = getFormType(inputType);

        let newData = data[formType];
        newData[inputType] = e.target.value;
        setData({ ...data, [formType]: newData })
    }

    function dataSubmit(inputData, type) {
        let newEduData = data[type];
        newEduData.children.push(inputData);
        setData({ ...data, [type]: newEduData });
    }

    function dataUpdate(inputData, type, index) {
        let newEduData = data[type];
        newEduData.children[index] = inputData;
        setData({ ...data, [type]: newEduData });
    }

    return (
        <div className="main">
            <FormBar
                data={data}
                handlers={{
                    generalInputHandler,
                    dataUpdate,
                    dataSubmit,
                    forceRender,
                    setData
                }} />
            <PreviewCV
                data={data} />
            {/* <button style={{ width: 200 + 'px', height: 50 + 'px' }} onClick={testData}>Test</button> */}
        </div>
    )
}