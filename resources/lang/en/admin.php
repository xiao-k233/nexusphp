<?php

return [
    'sidebar' => [
        'exam_users' => 'Exam Users',
        'hit_and_runs' => 'Hit And Runs',
        'users_list' => 'Users',
        'tags_list' => 'Tags',
        'agent_allows' => 'Agent Allows',
        'agent_denies' => 'Agent Denies',
        'exams_list' => 'Exams',
        'medals_list' => 'Medals',
        'settings' => 'Settings',
        'users_medals' => 'User medals',
        'claims' => 'User claims',
        'torrent_list' => 'Torrents',
        'torrent_state' => 'Free leach',
        'roles_list' => 'Roles',
        'ability_list' => 'Permissions',
    ],
    'resources' => [
        'agent_allow' => [
            'check_modal_btn' => 'Check',
            'check_modal_header' => 'Detect if the client is allowed',
            'check_pass_msg' => 'Congratulations, this client was passed by rule :id!',
        ],
        'user' => [
            'actions' => [
                'enable_modal_btn' => 'Enable',
                'enable_modal_title' => 'Enable user',
                'enable_disable_reason' => 'Reason',
                'enable_disable_reason_placeholder' => 'Optional',
                'disable_modal_btn' => 'Disable',
                'disable_modal_title' => 'Disable user',
                'disable_two_step_authentication' => 'Cancel two-step authentication',
                'change_bonus_etc_btn' => 'Change Uploaded etc.',
                'change_bonus_etc_action_increment' => 'Increment',
                'change_bonus_etc_action_decrement' => 'Decrement',
                'change_bonus_etc_field_label' => 'Field',
                'change_bonus_etc_action_label' => 'Action',
                'change_bonus_etc_value_label' => 'Value',
                'change_bonus_etc_value_help' => 'If the type is Uploaded/Download, the unit is: GB',
                'change_bonus_etc_reason_label' => 'Reason',
                'reset_password_btn' => 'Reset password',
                'reset_password_label' => 'New password',
                'reset_password_confirmation_label' => 'Confirm new password',
                'assign_exam_btn' => 'Assign exam',
                'assign_exam_exam_label' => 'Select exam',
                'assign_exam_begin_label' => 'Begin time',
                'assign_exam_end_label' => 'End time',
                'assign_exam_end_help' => 'If you do not specify a begin/end time, the time range set by the exam itself will be used',
                'grant_medal_btn' => 'Grant medal',
                'grant_medal_medal_label' => 'Select medal',
                'grant_medal_duration_label' => 'Duration',
                'grant_medal_duration_help' => 'Unit: days. If left blank, the user has permanent possession',
                'confirm_btn' => 'Confirm',
            ]
        ],
        'exam_user' => [
            'bulk_action_avoid_label' => 'Bulk avoid',
            'action_avoid' => 'Avoid',
            'result_passed' => 'Passed!',
            'result_not_passed' => 'Not passed!',
        ],
        'exam' => [
            'index_duplicate' => 'Index：:index duplicate !',
        ],
        'hit_and_run' => [
            'bulk_action_pardon' => 'Bulk pardon',
            'action_pardon' => 'Pardon',
        ],
        'torrent' => [
            'bulk_action_pos_state' => 'Sticky',
            'bulk_action_remove_tag' => 'Remove tag',
            'bulk_action_attach_tag' => 'Attach tag',
            'action_approval' => 'Approval',
        ],
    ]
];