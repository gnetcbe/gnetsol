const { createClient } = require("@supabase/supabase-js");
const { verifyToken } = require("./_auth");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

exports.handler = async (event) => {
  try {
    await verifyToken(event.headers.authorization);

    const { title, slug, content, status } = JSON.parse(event.body);

    if (!title || !slug || !content) {
      throw new Error("Missing required fields");
    }

    const { error } = await supabase.from("posts").insert([
      {
        title,
        slug,
        content,
        status: status || "draft",
      },
    ]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
