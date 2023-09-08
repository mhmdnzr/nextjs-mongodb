import connectMongoDb from "@/libs/mpngodb";
import Topic from "@/models/topic";
import {NextResponse} from "next/server";

export async function PUT(request: Request, {params}: any) {
    const {id} = params
    const {newTitle: title, newDescription: description} = await request.json()
    await connectMongoDb()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Topic updated"}, {status: 200})
}

export async function GET(request: Request, {params}: any) {
    const {id} = params
    await connectMongoDb()
    const topic = await Topic.findOne({_id: id})
    return NextResponse.json({topic}, {status: 200})
}