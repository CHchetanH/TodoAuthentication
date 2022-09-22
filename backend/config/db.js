import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGODB_URL);
		console.log(
			`Mongo DB connected : ${connect.connection.host} and collection ${connect.connection.name}`
		);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export {connectDB};
