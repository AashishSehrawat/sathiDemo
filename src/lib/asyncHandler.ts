import { NextResponse } from "next/server";
import { ZodError } from "zod";

type AppRouteHandler = (req: Request) => Promise<Response>;

export const asyncHandler = (handler: AppRouteHandler): AppRouteHandler => {
  return async (req: Request): Promise<Response> => {
    try {
      return await handler(req);
    } catch (err: any) {
      console.error("API Error:", err);

      if (err instanceof ZodError) {
        return NextResponse.json(
          { success: false, message: "Validaation Error by zod", err },
          { status: 400 }
        );
      }

      const statusCode = err?.statusCode || 500;
      const message = err?.message || "Internal Server Error";

      return NextResponse.json(
        { success: false, message },
        { status: statusCode }
      );
    }
  };
};
