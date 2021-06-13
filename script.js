function check(a)
{
    if (a >= '0' && a <= '9')
        return true;
    if (a >= 'a' && a <= 'z' || a >= 'A' && c <= 'a')
        return true;
    return false;
}

function validate12(arr)
{   
    removeSpaces(arr);
    if (arr.length == 0)
    {
        document.getElementById("result").innerHTML = "Пропущено поле ввода!";
        return false;
    }
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr[i].length; j++)
        {
            if (!check(arr[i][j]))
            {   
                document.getElementById("result").innerHTML = "Неправильный формат данных!";
                return false;
            }
        }
    }
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = i + 1; j < arr.length; )
        {
            if (arr[j] == arr[i])
            {
                arr.splice(j, 1);
            } else
            {
                j++;
            }
        }
    }   
    return true;
}

function validate3(relation, arr1, arr2)
{
    for (var i = 0; i < relation.length; i++)
    {
        if (relation[i].length != 2)
        {
            document.getElementById("result").innerHTML = "Неправильный формат входных данных!";
            return false;
        }
        for (var j = 0; j < 2; j++)
        {
            for (var k = 0; k < relation[i][j].length; k++)
            {
                if (!check(relation[i][j][k]))
                {
                    document.getElementById("result").innerHTML = "Неправильный формат входных данных!";
                    return false;
                }
            }
        }        
    }
    for (var i = 0; i < relation.length; i++)
    {
       if (arr1.indexOf(relation[i][0]) == -1 || arr2.indexOf(relation[i][1]) == -1)
        {
            document.getElementById("result").innerHTML = "Неправильный формат входных данных!";
            return false;
        } 
    }
    for (var i = 0; i < relation.length; i++)
    {
        for (var j = i + 1; j < relation.length; )
        {
            if (relation[j][0] == relation[i][0] && relation[j][1] == relation[i][1])
            {
                relation.splice(j, 1);
            } else
            {
                j++;
            }
        }
    }    
    return true;
}

function removeSpaces(arr)
{
    var i = 0;
    while (i < arr.length)
    {
        if (arr[i] == "")
        {
            arr.splice(i, 1);
        } else
        {
            i++;
        }
    }
}

function define(s1, s2, s3)
{
    var arr1 = s1.split(' ');
    if (!validate12(arr1))
    {
        return;
    } 
    var arr2 = s2.split(' ');
    if (!validate12(arr2))
    {
        return;
    }
    var relation = [];
    {
        var temp = s3.split(' ');
        removeSpaces(temp);
        if (temp.length == 0)
        {
            document.getElementById("result").innerHTML = "Пропущено поле ввода!";
            return;
        }        
        for (var i = 0; i < temp.length; i++)
        {
            relation[i] = [];
            relation[i] = temp[i].split(',');
        }
    }    
    if (!validate3(relation, arr1, arr2))
    {
        return;
    }
    if (relation.length != arr1.length)
    {
        document.getElementById("result").innerHTML = "Отношение R не является функцией из A в B";
        return;
    }
    for (var i = 0; i < relation.length; i++)
    {
        for (var j = i + 1; j < relation.length; j++)
        {
            if (relation[i][0] == relation[j][0])
            {
                document.getElementById("result").innerHTML = "Отношение R не является функцией из A в B";
                return;
            }
        }
    }
    document.getElementById("result").innerHTML = "Отношение R является функцией из A в B";    
}