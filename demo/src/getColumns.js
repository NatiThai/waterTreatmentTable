import React from "react";
import {
    UsernameCell,
    UsernameEditorCell,
    GenderEditorCell,
    ButtonsCell,
    ButtonsEditorCell as BaseButtonsEditorCell,
} from "./components/cells";

const getColumns = ({ setRowsData }) => {
    const ButtonsEditorCell = (props) => ( <
        BaseButtonsEditorCell {...props }
        setRowsData = { setRowsData }
        />
    );

    return [
        //    {
        //         id: "checkbox",
        //         visible: true,
        //         pinned: true,
        //         width: "54px",
        //     },
        {
            id: "2",
            field: "หน่วยงานที่รับผิดชอบ",
            label: "หน่วยงานที่รับผิดชอบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: UsernameCell,
            editorCellRenderer: UsernameEditorCell,
        },
        {
            id: "3",
            field: "ชื่อโครงการ",
            label: "ชื่อโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "3",
            field: "พิกัดที่ตั้ง",
            label: "พิกัดที่ตั้ง",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "4",
            field: "ที่อยู่",
            label: "ที่อยู่",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "5",
            field: "ลักษณะอาคาร",
            label: "ลักษณะอาคาร",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        // {
        //     id: "6",
        //     field: "gender",
        //     label: "Gender",
        //     visible: true,
        //     searchable: true,
        //     editable: true,
        //     sortable: true,
        //     resizable: true,
        //     editorCellRenderer: GenderEditorCell,
        // },
        {
            id: "6",
            field: "ขนาดบาน",
            label: "ขนาดบาน",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,

        },
        {
            id: "7",
            field: "จำนวนบาน",
            label: "จำนวนบาน",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "8",
            field: "ขนาดเครื่องสูบ",
            label: "ขนาดเครื่องสูบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "9",
            field: "จำนวนเครื่องสูบ",
            label: "จำนวนเครื่องสูบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "10",
            field: "ว/ด/ป ที่ตวจสอบล่าสุดโดยโครงการ",
            label: "ว/ด/ป ที่ตวจสอบล่าสุดโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            sort: ({ a, b, isAscending }) => {
                let aa = a.split("/").reverse().join(),
                    bb = b.split("/").reverse().join();
                return aa < bb ?
                    isAscending ?
                    -1 :
                    1 :
                    aa > bb ?
                    isAscending ?
                    1 :
                    -1 :
                    0;
            },
        },
        {
            id: "11",
            field: "วิธีการตรวจสอบโดยโครงการ",
            label: "วิธีการตรวจสอบโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "12",
            field: "ผลการตรวจสอบโดยโครงการ",
            label: "ผลการตรวจสอบโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "13",
            field: "ว/ด/ป ที่ตวจสอบล่าสุดโดยสำนัก",
            label: "ว/ด/ป ที่ตวจสอบล่าสุดโดยสำนัก",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            sort: ({ a, b, isAscending }) => {
                let aa = a.split("/").reverse().join(),
                    bb = b.split("/").reverse().join();
                return aa < bb ?
                    isAscending ?
                    -1 :
                    1 :
                    aa > bb ?
                    isAscending ?
                    1 :
                    -1 :
                    0;
            },
            
        },
        {
            id: "14",
            field: "วิธีการตรวจสอบโดยสำนัก",
            label: "วิธีการตรวจสอบโดยสำนัก",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "15",
            field: "ผลการตรวจสอบโดยสำนัก",
            label: "ผลการตรวจสอบโดยสำนัก",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        // {
        //     id: "buttons",
        //     width: "max-content",
        //     visible: true,
        //     pinned: true,
        //     sortable: false,
        //     resizable: false,
        //     cellRenderer: ButtonsCell,
        //     editorCellRenderer: ButtonsEditorCell,
        // },
    ];
};

export default getColumns;