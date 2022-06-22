import React from "react";
import {
    UsernameCell,
    UsernameEditorCell,
    GenderEditorCell,
    ButtonsCell,
    ButtonsEditorCell as BaseButtonsEditorCell,
} from "./components/cells";

const getColumns = ({ setRowsData }) => {
    const ButtonsEditorCell = (props) => (
        <BaseButtonsEditorCell {...props} setRowsData={setRowsData} />
    );

    return [
        // {
        //     id: "checkbox",
        //     visible: true,
        //     pinned: true,
        //     width: "54px",
        // },
        {
            id: "2",
            field: "username",
            label: "หน่วยงานที่รับผิดชอบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            pinned: true,
            cellRenderer: UsernameCell,
            editorCellRenderer: UsernameEditorCell,
        },
        {
            id: "3",
            field: "first_name",
            label: "ชื่อโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "4",
            field: "last_name",
            label: "พิกัดที่ตั้ง",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "5",
            field: "Address",
            label: "ที่อยู่",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "6",
            field: "Build",
            label: "ลักษณะอาคาร",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "7",
            field: "Done_years",
            label: "ก่อสร้างแล้วเสร็จปี พศ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "8",
            field: "SizeA",
            label: "ขนาดบาน",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            
        },
        {
            id: "9",
            field: "ValuesA",
            label: "จำนวนบาน",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "10",
            field: "SizeB",
            label: "ขนาดเครื่องสูบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "11",
            field: "ValuesB",
            label: "จำนวนเครื่องสูบ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "12",
            field: "DayCheck",
            label: "ว/ด/ป ที่ตรวจสอบล่าสุดโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            sort: ({ a, b, isAscending }) => {
                let aa = a.split("/").reverse().join(),
                    bb = b.split("/").reverse().join();
                return aa < bb
                    ? isAscending
                        ? -1
                        : 1
                    : aa > bb
                    ? isAscending
                        ? 1
                        : -1
                    : 0;
            },
        },
        {
            id: "13",
            field: "Howcheck",
            label: "วิธีการตรวจสอบโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "14",
            field: "Resultcheck",
            label: "ผลการตรวจสอบโดยโครงการ",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "15",
            field: "last_visited",
            label: "ว/ด/ป ที่ตรวจสอบล่าสุดโดยสำนัก",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            sort: ({ a, b, isAscending }) => {
                let aa = a.split("/").reverse().join(),
                    bb = b.split("/").reverse().join();
                return aa < bb
                    ? isAscending
                        ? -1
                        : 1
                    : aa > bb
                    ? isAscending
                        ? 1
                        : -1
                    : 0;
            },
        },
        {
            id: "16",
            field: "EyeCheck",
            label: "วิธีการตรวจสอบโดยสำนัก",
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: "17",
            field: "Enclosed",
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
