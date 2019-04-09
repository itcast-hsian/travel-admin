
/**
 *
 * @apiDefine RkNotFoundException
 *
 * @apiError RkNotFoundException 找不到相关数据
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": {
 *           "statusCode": 400,
 *           "error": "Bad Request",
 *           "message" ""
 *       }
 *     }
 *
 */

/**
* 
* @api {post} /accounts/login 登录
* @apiName Login
* @apiGroup ACCOUNT
*
* @apiParam {String} username 手机号码
* @apiParam {String} password 密码
* 
* @apiSuccess {String} jwt token
* @apiSuccess {Object} user 用户信息
* 
* @apiSuccessExample 成功响应：
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NTIwMDAzLCJleHAiOjE1NTcxMTIwMDN9.qiTS5nyRPz14X4wfcmy7pen6edXpimL5iBbTHY5K-8o",
    "user": {
        "id": 1,
        "username": "13312882474",
        "email": null,
        "role": 2,
        "nickname": "my",
        "created_at": 1553587751614,
        "updated_at": 1553587751627
    }
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {post} /accounts/register 注册
* @apiName Register
* @apiGroup ACCOUNT
*
* @apiHeader {string} Content-Type application/x-www-form-urlencoded
*
* @apiParam {String} username 手机号码
* @apiParam {String} nickname 昵称
* @apiParam {String} captcha  手机验证码
* @apiParam {String} password 密码
* 
* @apiSuccess {String} jwt token
* @apiSuccess {Object} user 用户信息
* 
* @apiSuccessExample 成功响应：
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTU0NTIwODMwLCJleHAiOjE1NTcxMTI4MzB9.w2LbX41OFG4VJArlGq4BJBVFdjRzb2v5Z_uhsb4oPhA",
    "user": {
        "id": 6,
        "username": "13312882472",
        "email": null,
        "role": {
            "id": 2,
            "name": "Authenticated",
            "description": "Default role given to authenticated user.",
            "type": "authenticated"
        },
        "nickname": "my",
        "created_at": 1554520830711,
        "updated_at": 1554520830723,
        "comments": []
    }
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {post} /captchas 手机验证码
* @apiName getCaptchas
* @apiGroup ACCOUNT
*
* @apiHeader {string} Content-Type application/x-www-form-urlencoded
*
* @apiParam {String} tel 手机号码
* 
* @apiSuccessExample 成功响应：
{
    status: 0,
    message: "success"
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {get} /hotels 酒店详情
* @apiName Hotels
* @apiGroup HOTEL
*
* @apiParam {String} ALL 			所有字段
* @apiParam {String} name_contains 	名字模糊查询
* @apiParam {String} _sort  		排序
* @apiParam {Number} _limit  		条数
* @apiParam {Number} _start         开始数据（分页）
*
* @apiSuccess {Object} data 酒店信息
* 
* @apiExample 请求例子
* 	127.0.0.1:1337/hotels?city=197&country=2046&name_contains=香格&_limit=1&_start=0
* 
* @apiSuccessExample 成功响应：
{
    "data": {
        "hotels": [
            {
                "id": 2,
                "name": "香格里拉",
                "enName": "xiang ge li la",
                "isHot": null,
                "score": 3.5,
                "location": {},
                "summary": "香格里拉大酒店",
                "enterTime": "2019-04-02 00:00:00",
                "leftTime": "2019-04-03 00:00:00",
                "buildTime": "2019-04-03 00:00:00",
                "lastBuildTime": "2019-04-03 00:00:00",
                "roomCount": 50,
                "province": {
                    "id": 18,
                    "name": "广东省",
                    "code": "440000000000",
                    "parentCode": "",
                    "level": "1",
                    "created_at": "2019-04-02 08:49:44",
                    "updated_at": "2019-04-02 08:49:44"
                },
                "city": {
                    "id": 197,
                    "name": "广州市",
                    "code": "440100000000",
                    "parentCode": "440000000000",
                    "level": "2",
                    "created_at": "2019-04-02 08:18:16",
                    "updated_at": "2019-04-02 08:18:16"
                },
                "hotellevel": {
                    "id": 5,
                    "level": 5,
                    "name": "5星",
                    "created_at": 1554366186264,
                    "updated_at": 1554366186277
                },
                "hoteltype": {
                    "id": 2,
                    "name": "高端酒店",
                    "created_at": 1554263122400,
                    "updated_at": 1554263122417
                },
                "hotelbrand": {
                    "id": 2,
                    "name": "香格里拉",
                    "cities": [
                        "广州",
                        "大理",
                        "上海",
                        "昆明"
                    ],
                    "created_at": 1554261173669,
                    "updated_at": 1554261258768
                },
                "price": 500,
                "country": {
                    "id": 2046,
                    "name": "天河区",
                    "code": "440106000000",
                    "parentCode": "440100000000",
                    "level": "3",
                    "created_at": "2019-04-06 01:32:49",
                    "updated_at": "2019-04-06 01:32:49"
                },
                "created_at": 1554261979396,
                "updated_at": 1554514601624,
                "pics": [
                    {
                        "id": 1,
                        "name": "xianggelila.jpg",
                        "hash": "d841a1a0e05440388d13b23cddaaf8d6",
                        "sha256": "OUpRah3GWvpIZBSgAnUm4LspRFW1-kypP2YK4lnHZpA",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": "33.59",
                        "url": "/uploads/d841a1a0e05440388d13b23cddaaf8d6.jpg",
                        "provider": "local",
                        "public_id": null,
                        "created_at": 1554369718286,
                        "updated_at": 1554369718310
                    }
                ],
                "comments": [
                    {
                        "id": 1,
                        "account": 1,
                        "content": "酒店环境很好",
                        "like": null,
                        "likeIds": [],
                        "score": 4.5,
                        "hotel": 2,
                        "created_at": 1554368708175,
                        "updated_at": 1554368708201
                    }
                ],
                "hotelassets": [
                    {
                        "id": 1,
                        "name": "wifi",
                        "type": "房间设施",
                        "hotels": 2,
                        "created_at": 1554264873390,
                        "updated_at": 1554514601655
                    },
                    {
                        "id": 2,
                        "name": "热水壶",
                        "type": "房间设施",
                        "hotels": 2,
                        "created_at": 1554366902573,
                        "updated_at": 1554514601636
                    },
                    {
                        "id": 3,
                        "name": "吹风机",
                        "type": "房间设施",
                        "hotels": 2,
                        "created_at": 1554366910595,
                        "updated_at": 1554514601664
                    },
                    {
                        "id": 4,
                        "name": "外币兑换服务",
                        "type": "酒店服务",
                        "hotels": 2,
                        "created_at": 1554367127462,
                        "updated_at": 1554514601663
                    },
                    {
                        "id": 5,
                        "name": "洗衣服务",
                        "type": "酒店服务",
                        "hotels": 2,
                        "created_at": 1554367145794,
                        "updated_at": 1554514601680
                    },
                    {
                        "id": 6,
                        "name": "电梯",
                        "type": "主要设施",
                        "hotels": 2,
                        "created_at": 1554367166516,
                        "updated_at": 1554514601674
                    }
                ],
                "products": [
                    {
                        "name": "携程",
                        "price": "50040.52"
                    },
                    {
                        "name": "艺龙",
                        "price": "5008.55"
                    },
                    {
                        "name": "Hotels.com",
                        "price": "50059.90"
                    }
                ]
            }
        ]
    }
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {get} /hotels/options 酒店选项
* @apiName Hotel Options
* @apiGroup HOTEL
*
* 
* 
* @apiSuccessExample 成功响应：
{
    data: {
        "levels": [],
        "types": [],
        "assets": [],
        "brands": []
    }
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {get} /hotels/comments 获取酒店评论
* @apiName Get Hotel Comments
* @apiGroup COMMENT
*
* @apiParam {Number} hotel          酒店id
* @apiParam {String} _sort          排序
* @apiParam {Number} _limit         条数
* @apiParam {Number} _start         开始数据（分页）
* 
* @apiSuccessExample 成功响应：
{
    "data": [
        {
            "id": 1,
            "account": 1,
            "content": "酒店环境很好",
            "like": 1,
            "likeIds": [],
            "score": 4.5,
            "hotel": 2,
            "created_at": 1554368708175,
            "updated_at": 1554705888282
        }
    ],
    "total": 1
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {get} /comments/like 评论点赞
* @apiName Hotel Comments Like
* @apiGroup COMMENT
*
* @apiHeader {String} Authorization token
* @apiHeaderExample token请求头
{
    Authorization： Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NzA5MDEzLCJleHAiOjE1NTczMDEwMTN9.rOOiugMSBZwPvEtFBV7f_gPnLOR90N5nDLWgh_G6R-0
}
*
* @apiParam {Number} id             评论id
* 
* @apiSuccessExample 成功响应：
{
    id: 1
}
*
* @apiUse RkNotFoundException
*/



/**
* 
* @api {post} /comments 提交评论
* @apiName Set Hotel Comments
* @apiGroup COMMENT
*
* @apiHeader {string} Content-Type application/json
* @apiHeader {String} Authorization token
* @apiHeaderExample token请求头
{
    Authorization： Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NzA5MDEzLCJleHAiOjE1NTczMDEwMTN9.rOOiugMSBZwPvEtFBV7f_gPnLOR90N5nDLWgh_G6R-0
}
*
* @apiParam {String} content 评论内容
* @apiParam {Object} score   评分镀锌
* @apiParam {Float}  score.location   位置评分
* @apiParam {Float}  score.service    服务评分
* @apiParam {Float}  score.fancility  设施评分
* @apiParam {Float}  score.all        总体评分
* @apiParam {Array}  pics             图片
* @apiParam {Number} hotel            酒店id
* @apiParam {Number} account          用户id
*
* @apiExample 请求例子
{
    "content": "postman 评论2",
    "like": 1,
    "likeIds": [1],
    "score": {"service": 4, "location": 4.2},
    "pics": [
        {
            "created_at": 1554780485209,
            "ext": ".jpeg",
            "hash": "a067aac50f3c4224bfb060f7c81dc54c",
            "id": 3,
            "mime": "image/jpeg",
            "name": "wKgBZ1laE5GAH0GWAAGFZyv3znE68.jpeg",
            "provider": "local",
            "public_id": null,
            "related": [],
            "sha256": "xn-vndROmvVAbUIqrahe0zAizgAn2S1cEKcA6_ubcKE",
            "size": "99.96",
            "updated_at": 1554780485233,
            "url": "/uploads/a067aac50f3c4224bfb060f7c81dc54c.jpeg"
        }
    ],
    "account": 1,
    "hotel": 1
    
} 
* 
* @apiSuccessExample 成功响应：
{
    "id": 7,
    "account": {
        "id": 1,
        "username": "13312882474",
        "password": "123123",
        "email": null,
        "role": 2,
        "nickname": "my",
        "created_at": 1553587751614,
        "updated_at": 1553587751627
    },
    "content": "postman 评论2",
    "like": 1,
    "likeIds": [
        1
    ],
    "score": {
        "service": 4,
        "location": 4.2
    },
    "hotel": {
        "id": 1,
        "name": "7天连锁-棠下店",
        "enName": "seven day - tang xia",
        "isHot": 1,
        "score": 3.4,
        "location": {},
        "summary": "7天连锁-国内最大的连锁酒店",
        "enterTime": "2019-04-01 00:00:00",
        "leftTime": "2019-04-11 00:00:00",
        "buildTime": "2019-04-04 00:00:00",
        "lastBuildTime": "2019-04-18 00:00:00",
        "roomCount": 100,
        "province": 18,
        "city": 3,
        "hotellevel": 1,
        "hoteltype": 1,
        "hotelbrand": 1,
        "price": 200,
        "country": 2046,
        "created_at": 1554196236247,
        "updated_at": 1554514582265
    },
    "follow": null,
    "created_at": 1554782672015,
    "updated_at": 1554782672033,
    "pics": [
        {
            "id": 3,
            "name": "wKgBZ1laE5GAH0GWAAGFZyv3znE68.jpeg",
            "hash": "a067aac50f3c4224bfb060f7c81dc54c",
            "sha256": "xn-vndROmvVAbUIqrahe0zAizgAn2S1cEKcA6_ubcKE",
            "ext": ".jpeg",
            "mime": "image/jpeg",
            "size": "99.96",
            "url": "/uploads/a067aac50f3c4224bfb060f7c81dc54c.jpeg",
            "provider": "local",
            "public_id": null,
            "created_at": 1554780485209,
            "updated_at": 1554780485233
        }
    ],
    "followed": []
}
*
* @apiUse RkNotFoundException
*/

/**
* 
* @api {get} /upload 文件上传
* @apiName upload
* @apiGroup UPLOAD
*
* @apiHeader {String} Authorization token
* @apiHeaderExample token请求头
{
    Authorization： Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NzA5MDEzLCJleHAiOjE1NTczMDEwMTN9.rOOiugMSBZwPvEtFBV7f_gPnLOR90N5nDLWgh_G6R-0
}
*
* @apiParam {files} files       评论id
*
* @apiExample 请求例子
<form>
  <!-- Can be multiple files -->
  <input type="file" name="files">
  <input type="submit" value="Submit">
</form>

<script type="text/javascript">
  const formElement = document.querySelector('form');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();

    request.open('POST', 'http://127.0.0.1:1337/upload');

    request.send(new FormData(formElement));
  });
</script>
* 
* @apiSuccessExample 成功响应：
[
    {
        created_at: 1554780485209,
        ext: ".jpeg",
        hash: "a067aac50f3c4224bfb060f7c81dc54c",
        id: 3,
        mime: "image/jpeg",
        name: "wKgBZ1laE5GAH0GWAAGFZyv3znE68.jpeg",
        provider: "local",
        public_id: null,
        related: [],
        sha256: "xn-vndROmvVAbUIqrahe0zAizgAn2S1cEKcA6_ubcKE",
        size: "99.96",
        updated_at: 1554780485233,
        url: "/uploads/a067aac50f3c4224bfb060f7c81dc54c.jpeg"
    }
]
*
* @apiUse RkNotFoundException
*/