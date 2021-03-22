import { Card, Form, Input, Button } from 'antd'

export default function CommentBox(props) {
    const { loading } = props;

    return (
        <Card
            style={{ marginTop: '10px' }}
            type="inner"
            bordered
            loading={loading}
            title="评论区"
        >
            <Form.Item>
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary" style={{width:"100%"}}>
                    Add Comment
                </Button>
            </Form.Item>
        </Card>
    )
}