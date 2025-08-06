#[test_only]
module MyDID::test_end_to_end {
    use std::string;

    use MyDID::message_board;

    #[test(sender = @MyDID::message_board_addr)]
    fun test_end_to_end(sender: &signer) {
        message_board::init_module_for_test(sender);

        message_board::post_message(sender, string::utf8(b"hello world"));

        let string_content = message_board::get_message_content();
        assert!(string_content == string::utf8(b"hello world"), 3);

        // Post again, should overwrite the old message
        message_board::post_message(sender, string::utf8(b"hello aptos"));

        let string_content = message_board::get_message_content();
        assert!(string_content == string::utf8(b"hello aptos"), 16);
    }
}
