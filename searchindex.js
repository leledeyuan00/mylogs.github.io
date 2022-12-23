Search.setIndex({"docnames": ["2022_12/ATI_sensor", "2022_12/Trajectory_controller", "2022_12/index", "index", "notes/index", "notes/kinematics_interface", "notes/real_time_pub_sub", "notes/robot_description", "notes/rotation_error"], "filenames": ["2022_12/ATI_sensor.rst", "2022_12/Trajectory_controller.rst", "2022_12/index.rst", "index.rst", "notes/index.rst", "notes/kinematics_interface.rst", "notes/real_time_pub_sub.rst", "notes/robot_description.rst", "notes/rotation_error.rst"], "titles": ["ATI Sensor development", "Denso Robot Trajectory Controller Development", "Logs in 2022-12", "Dayuan Research Logs!", "Some notes", "Kinematics", "ROS2 realtime pub and sub", "How to get the robot_description parameter well?", "Rotation Error Computing"], "terms": {"It": [0, 1, 5], "": [0, 1, 4, 8], "wire": 0, "when": [0, 1], "i": [0, 1, 5, 6, 7, 8], "first": [0, 2, 5], "run": 0, "soem": 0, "root": 0, "user": [0, 1], "can": [0, 1, 5, 7, 8], "observ": 0, "topic": 0, "narmal": 0, "termin": 0, "just": [0, 1], "cannot": [0, 1, 7], "read": 0, "data": [0, 5], "thi": [0, 1, 5, 6, 7, 8], "And": [0, 1], "tri": 0, "set": [0, 1], "environ": [0, 1], "export": 0, "fastrtps_default_profiles_fil": 0, "xxx": [0, 6], "work": [0, 1], "BUT": 0, "try": [0, 1, 7], "agian": 0, "sever": 0, "hour": 0, "later": 0, "doesn": 0, "t": [0, 1, 5], "scenc": 0, "so": [0, 1, 7], "even": 0, "see": 0, "node": [0, 1, 7], "ani": 0, "how": [0, 1, 3, 4], "mayb": [0, 1], "reset": [0, 7], "udp": 0, "transmiss": 0, "rest": 0, "don": [0, 1], "know": 0, "why": [0, 1], "config": [0, 1], "xml": 0, "file": [0, 1], "lead": 0, "sudo": 0, "ros2": [0, 2, 3, 4, 7], "anymor": 0, "us": [0, 1, 5, 7, 8], "ethercat": 0, "packag": [0, 1, 5], "There": [0, 1, 8], "ar": [0, 1, 6], "3": 0, "problem": [0, 2], "need": [0, 1], "The": [0, 1, 5, 8], "whatev": 0, "foxi": 0, "humbl": 0, "both": [0, 1], "all": [0, 1, 6], "them": 0, "base": [0, 1], "newest": 0, "kernel": 0, "But": [0, 7], "igh": 0, "veri": [0, 5], "old": 0, "build": 0, "myself": [0, 1], "find": [0, 1], "suitabl": 0, "map": 0, "network": 0, "between": 0, "host": 0, "commun": 0, "must": 0, "absolut": 0, "isol": 0, "issu": 0, "said": 0, "some": [0, 1, 3, 6], "gui": 0, "contain": 0, "also": [0, 1], "detect": [0, 1], "code": [0, 5, 8], "net": [0, 5], "ipc": 0, "pid": 0, "rm": 0, "osrf": 0, "ro": [0, 1, 6], "desktop": 0, "demo_nodes_cpp": 0, "talker": 0, "should": [0, 1, 5], "reinstal": 0, "out": 0, "my": 0, "knowledg": 0, "area": 0, "instal": 0, "you": 0, "docker0": 0, "interfac": [0, 1, 4, 6], "becaus": [0, 1, 7], "depend": [0, 1], "virtual": [0, 2], "machin": 0, "Not": 0, "linux": 0, "bug": 0, "engin": 0, "instead": 0, "done": [0, 1], "red": 0, "blink": 0, "add": [0, 1], "model": 0, "xcaro": 0, "wrapper": 0, "hardwar": [0, 5], "ros2_control": 0, "decid": 1, "solv": [1, 2], "invers": [1, 5, 8], "kinemat": [1, 3, 4], "probelm": 1, "By": 1, "stefanscherzing": 1, "paramet": [1, 3, 4], "well": [1, 3, 4], "Such": 1, "robot_descript": [1, 3, 4], "other": [1, 6], "For": 1, "client": 1, "rescript": 1, "uncontrol": 1, "If": 1, "here": 1, "load": [1, 6], "directli": [1, 5, 8], "spawn": 1, "which": 1, "usual": 1, "combin": 1, "urdf": [1, 7], "found": [1, 7], "doe": 1, "correctli": 1, "cartesian": [1, 5, 8], "motion": [1, 5], "an": 1, "offici": 1, "fammiliar": 1, "Then": [1, 5, 8], "write": [1, 6], "function": [1, 5, 6], "seem": 1, "interest": 1, "declar": 1, "subscrib": [1, 6], "updat": [1, 5, 6], "variabl": 1, "ganrantte": 1, "performac": 1, "gener": [1, 7, 8], "certain": 1, "loop": 1, "rate": 1, "send": 1, "frequenc": 1, "pub": [1, 3, 4], "sub": [1, 3, 4], "c": [1, 5], "do": 1, "current": [1, 5, 8], "In": [1, 5], "stefan": [1, 4, 8], "imped": 1, "system": 1, "good": [1, 8], "wai": [1, 8], "servic": 1, "better": 1, "moveit2": [1, 4], "servo": [1, 4], "think": 1, "chanc": 1, "learn": 1, "veloc": [1, 5, 6], "limitaion": 1, "joint": [1, 4, 6], "anoth": 1, "flexibl": 1, "No": 1, "collis": 1, "wrote": 1, "import": 1, "ensur": 1, "what": 1, "basic": 1, "canb": 1, "select": 1, "anytim": 1, "ad": 1, "design": 1, "its": 1, "finnal": 1, "trajectory_control": 1, "real": 1, "safe": 1, "larg": 1, "workspac": 1, "go": 1, "home": 1, "state": [1, 6], "professor": 1, "ask": 1, "question": 1, "todai": 1, "2022": [1, 3], "19": 1, "too": 1, "high": 1, "answer": 1, "kind": 1, "feedback": 1, "posit": [1, 5, 6], "chang": 1, "make": [1, 5], "forc": [1, 5], "iner": 1, "execut": 1, "itself": 1, "alreadi": 1, "consid": 1, "u": [1, 5], "from": [1, 5, 6, 7, 8], "progress": 1, "get": [1, 3, 4, 6], "h": [1, 5], "matrix": [1, 4, 8], "gazebo": 1, "referenc": [1, 5, 8], "ur": 1, "moveit": 1, "\u82f1\u8bed\u5199\u7684\u8fd8\u662f\u592a\u9ebb\u70e6\u4e86": 1, "\u4ee5\u540e\u8fd8\u662f\u4e2d\u6587\u5199\u597d\u4e86": 1, "\u4e0d\u8fc7\u8fd8\u662f\u8981\u591a\u5199\u5199\u82f1\u8bed": 1, "\u4e0d\u7136\u4f1a\u5fd8\u7684\u592a\u5feb\u4e86": 1, "\u5367\u69fd": 1, "\u8fd9\u4e00\u53e5\u662fai\u7ed9\u6211\u5199\u51fa\u6765\u7684": 1, "\u6211\u8c22\u8c22\u5b83\u4e86": 1, "\u597d\u5427": 1, "\u65e2\u7136ai\u7ed9\u6211\u5199\u4e86": 1, "\u90a3\u6211\u8fd8\u662f\u7ee7\u7eed\u7ec3\u7ec3\u82f1\u8bed\u597d\u4e86": 1, "\u867d\u7136\u4e00\u5806\u8bed\u6cd5\u9519\u8bef": 1, "\u54c8\u54c8": 1, "ati": [2, 3], "sensor": [2, 3], "develop": [2, 3], "docker": 2, "next": [2, 5], "todo": 2, "denso": [2, 3], "robot": [2, 3, 5, 7], "trajectori": [2, 3], "control": [2, 3, 4, 6, 8], "forward": [2, 5], "dynam": 2, "second": [2, 5], "16": 2, "admitt": [2, 6], "realtim": [2, 3, 4], "command": 2, "custom": 2, "ik": 2, "solver": [2, 4], "12": 3, "rotat": [3, 4], "error": [3, 4, 6, 7], "comput": [3, 4, 5], "plugin": 4, "kdl": 4, "mass": 4, "method": 4, "realiz": 4, "singular": 4, "handl": 4, "provid": 5, "librari": 5, "space": 5, "calcul": [5, 6], "damp": 5, "least": 5, "squar": 5, "dl": 5, "avoid": 5, "equat": 5, "q": 5, "j": 5, "lambda": 5, "2": [5, 8], "1": [5, 8], "x_": 5, "desir": [5, 6], "where": [5, 8], "jacobian": [5, 8], "factor": 5, "ident": 5, "x": 5, "orient": 5, "end": 5, "effector": 5, "github": 5, "ha": 5, "jnttomass": 5, "const": [5, 6], "jntarrai": 5, "jntspaceinertiamatrix": 5, "follow": [5, 8], "sum_": 5, "n": 5, "m_i": 5, "j_i": 5, "j_j": 5, "m_j": 5, "link": 5, "child": 5, "euqtion": 5, "ddot": 5, "f": 5, "trajectory_msg": [5, 6], "msg": [5, 6], "jointtrajectorypoint": [5, 6], "forwarddynamicssolv": 5, "getjointcontrolcmd": 5, "rclcpp": [5, 6, 7], "durat": [5, 6], "period": [5, 6], "ctrl": 5, "vector6d": 5, "net_forc": 5, "inertia": 5, "actual": 5, "buildgenericmodel": 5, "m_jnt_space_inertia_solv": 5, "m_current_posit": 5, "m_jnt_space_inertia": 5, "m_jnt_jacobian_solv": 5, "jnttojac": 5, "m_jnt_jacobian": 5, "acceler": 5, "accord": 5, "m_current_acceler": 5, "transpos": 5, "numer": 5, "time": [5, 6], "integr": 5, "euler": 5, "m_last_posit": 5, "m_last_veloc": 5, "m_current_veloc": 5, "0": [5, 6], "9": 5, "10": 5, "global": [5, 7], "against": 5, "unwant": 5, "null": 5, "Will": 5, "caus": 5, "exponenti": 5, "slow": 5, "down": 5, "without": 5, "input": [5, 6], "sure": 5, "stai": 5, "allow": 5, "margin": 5, "applyjointlimit": 5, "appli": [5, 6], "result": 5, "control_cmd": 5, "int": 5, "m_number_joint": 5, "push_back": 5, "left": 5, "empti": [5, 7], "those": 5, "valu": [5, 6], "interpret": 5, "most": 5, "driver": 5, "max": 5, "toler": 5, "As": 5, "consequ": 5, "move": 5, "slowli": 5, "time_from_start": 5, "valid": 5, "cycl": 5, "return": [5, 6, 7], "svd": 5, "last": 5, "column": 5, "point": 5, "toward": 5, "awai": 5, "singualr": 5, "refer": [5, 6], "controller_interfac": 6, "callbackreturn": [6, 7], "on_configur": 6, "rclcpp_lifecycl": [6, 7], "previous_st": 6, "configur": 6, "setup": 6, "publish": 6, "auto": [6, 7], "joint_command_callback": 6, "std": [6, 7], "shared_ptr": 6, "input_joint_command_": 6, "writefromnonrt": 6, "input_joint_command_subscriber_": 6, "get_nod": [6, 7], "create_subscript": 6, "joint_refer": 6, "systemdefaultsqo": 6, "s_publisher_": 6, "create_publish": 6, "control_msg": 6, "xxxmsg": 6, "statu": 6, "state_publisher_": 6, "make_uniqu": 6, "realtime_tool": 6, "realtimepublish": 6, "controllerstatemsg": 6, "return_typ": 6, "update_reference_from_subscrib": 6, "messag": 6, "admittance_": 6, "joint_command_msg_": 6, "readfromrt": 6, "exist": 6, "size_t": 6, "size": 6, "position_reference_": 6, "velocity_reference_": 6, "ok": 6, "update_and_write_command": 6, "constraint": 6, "requir": 6, "chainabl": 6, "read_state_reference_interfac": 6, "reference_": 6, "read_state_from_hardwar": 6, "joint_state_": 6, "ft_values_": 6, "determin": 6, "reference_admittance_": 6, "write_state_to_hardwar": 6, "lock": 6, "msg_": 6, "get_controller_st": 6, "unlockandpublish": 6, "share": 7, "each": 7, "would": 7, "robot_state_publish": 7, "we": 7, "paremet": 7, "namespac": 7, "chrono_liter": 7, "string": 7, "m_robot_descript": 7, "get_paramet": 7, "as_str": 7, "syncparameterscli": 7, "sharedptr": 7, "urdf_param_cli": 7, "parameter_nod": 7, "new": 7, "make_shar": 7, "rclcpp_info": 7, "get_logg": 7, "wait": 7, "server": 7, "bool": 7, "success": 7, "wait_for_servic": 7, "5": 7, "rclcpp_error": 7, "node_interfac": 7, "lifecyclenodeinterfac": 7, "param": 7, "value_to_str": 7, "never": 8, "knew": 8, "befor": 8, "formula": 8, "he": 8, "quertonion": 8, "multipli": 8, "target": 8, "mathbf": 8, "r": 8, "_": 8, "rodrigu": 8, "vector": 8, "eigen": 8, "matrix3d": 8, "r_error": 8, "r_target": 8, "r_current": 8, "angleaxisd": 8, "vector3d": 8, "error_angl": 8, "axi": 8, "angl": 8, "sin": 8, "theta": 8, "k": 8, "co": 8, "skew": 8, "symmetr": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ati": 0, "sensor": 0, "develop": [0, 1], "docker": 0, "solv": 0, "next": 0, "todo": [0, 1], "denso": 1, "robot": 1, "trajectori": 1, "control": [1, 5], "virtual": 1, "forward": 1, "dynam": 1, "first": 1, "problem": 1, "second": 1, "12": [1, 2], "16": 1, "admitt": 1, "ros2": [1, 5, 6], "realtim": [1, 6], "command": 1, "custom": 1, "ik": 1, "solver": [1, 5], "log": [2, 3], "2022": 2, "dayuan": 3, "research": 3, "note": [3, 4], "some": 4, "kinemat": 5, "interfac": 5, "plugin": 5, "kdl": 5, "joint": 5, "mass": 5, "matrix": 5, "stefan": 5, "": 5, "method": 5, "realiz": 5, "singular": 5, "handl": 5, "moveit2": 5, "servo": 5, "pub": 6, "sub": 6, "how": 7, "get": 7, "robot_descript": 7, "paramet": 7, "well": 7, "rotat": 8, "error": 8, "comput": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"ATI Sensor development": [[0, "ati-sensor-development"]], "Docker": [[0, "docker"]], "Solved!": [[0, "solved"]], "Next TODO": [[0, "next-todo"]], "Denso Robot Trajectory Controller Development": [[1, "denso-robot-trajectory-controller-development"]], "Virtual Forward Dynamics": [[1, "virtual-forward-dynamics"]], "First Problem": [[1, "first-problem"]], "Second Problem": [[1, "second-problem"]], "12-16": [[1, "id1"]], "Admittance Controller in ROS2 controllers": [[1, "admittance-controller-in-ros2-controllers"]], "Realtime command": [[1, "realtime-command"]], "Custom Controller": [[1, "custom-controller"]], "Custom IK Solver": [[1, "custom-ik-solver"]], "TODO:": [[1, "todo"]], "Logs in 2022-12": [[2, "logs-in-2022-12"]], "Dayuan Research Logs!": [[3, "dayuan-research-logs"]], "LOGs": [[3, "logs"]], "Notes": [[3, "notes"]], "Some notes": [[4, "some-notes"]], "Kinematics": [[5, "kinematics"]], "Kinematics Interface \u2013 ROS2 controller plugin": [[5, "kinematics-interface-ros2-controller-plugin"]], "KDL Kinematics Solver": [[5, "kdl-kinematics-solver"]], "Joint Mass Matrix": [[5, "joint-mass-matrix"]], "Stefan\u2019s method realized by KDL": [[5, "stefan-s-method-realized-by-kdl"]], "Singularity Handle in Moveit2 Servoing": [[5, "singularity-handle-in-moveit2-servoing"]], "ROS2 realtime pub and sub": [[6, "ros2-realtime-pub-and-sub"]], "How to get the robot_description parameter well?": [[7, "how-to-get-the-robot-description-parameter-well"]], "Rotation Error Computing": [[8, "rotation-error-computing"]]}, "indexentries": {}})